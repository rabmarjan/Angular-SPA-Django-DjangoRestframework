import json
from django.shortcuts import render
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.db import IntegrityError
from django.views.decorators.csrf import csrf_exempt
from .models import Token
from .models import Role
from .utils import json_response, token_required


@csrf_exempt
def register(request):
    if request.method == 'POST':
        username = request.POST.get('username', None)
        password = request.POST.get('password', None)

        if username is not None and password is not None:
            try:
                user = User.objects.create_user(username, None, password)
            except IntegrityError:
                return json_response({
                    'error': 'User already exists'
                }, status=400)
            token = Token.objects.create(user=user)
            print('success')
            return json_response({
                'token': token.token,
                'username': user.username
            })
        else:
            return json_response({
                'error': 'Invalid Data'
            }, status=400)
    elif request.method == 'OPTIONS':
        return json_response({})
    else:
        return json_response({
            'error': 'Invalid Method'
        }, status=405)


@csrf_exempt
def login(request):
    if request.method == 'POST':
        #username = request.POST.get('username', None)
        #password = request.POST.get('password', None)
        data = json.loads(request.body.decode("utf-8"))
        username = data["username"]
        password = data["password"]
        if username is not None and password is not None:
            user = authenticate(username=username, password=password)
            if user is not None:
                if user.is_active:
                    token, created = Token.objects.get_or_create(user=user)
                    role = Role.objects.get(user=user)
                    return json_response({
                        "success": True,
                        "username": user.username,
                        "token": token.token,
                        "roleID": role.roleid,
                        "roleName": role.rolename,
                        "roleJSON": role.rolejson
                    })
                else:
                    return json_response({
                        'error': 'Invalid User',
                        'success': False
                    }, status=400)
            else:
                return json_response({
                    'error': 'Invalid Username/Password'
                }, status=400)
        else:
            return json_response({
                'error': 'Invalid Data',
                'username': request,
                'pasword': password
            }, status=400)
    elif request.method == 'OPTIONS':
        return json_response({})
    else:
        return json_response({
            'error': 'Invalid Method'
        }, status=405)


@csrf_exempt
@token_required
def logout(request):
    if request.method == 'POST':
        request.token.delete()
        return json_response({
            'status': 'success'
        })
    elif request.method == 'OPTIONS':
        return json_response({})
    else:
        return json_response({
            'error': 'Invalid Method'
        }, status=405)
