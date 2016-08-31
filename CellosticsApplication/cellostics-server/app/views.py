from .models import *
from .serializers import *
from dauth.views import login
from rest_framework.views import APIView
from rest_framework import views
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import permissions
from django.contrib.auth.models import User
from rest_framework import status
from random import randint
from django.http import Http404
import uuid
from reportlab.pdfgen import canvas
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from reportlab.platypus import Image
import sys
import reportlab
from reportlab.lib.pagesizes import letter, A4 , cm
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle, Image
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib import colors
from io import BytesIO


class UserList(generics.ListCreateAPIView):
    """List all users or create a new User"""
    permission_classes = (permissions.IsAuthenticated,)
    model = User
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveAPIView):
    """Retrieve, update or delete a User instance."""
    permission_classes = (permissions.IsAuthenticated,)
    model = User
    queryset = User.objects.all()
    serializer_class = UserSerializer


class AddressList(generics.ListCreateAPIView):
    """List all addresses or create a new Address"""
    permission_classes = (permissions.IsAuthenticated,)
    model = Address
    queryset = Address.objects.all()
    serializer_class = AddressSerializer


class AddressDetail(generics.RetrieveUpdateDestroyAPIView):
    """Retrieve, update or delete an Address."""
    permission_classes = (permissions.IsAuthenticated,)
    model = Address
    queryset = Address.objects.all()
    serializer_class = AddressSerializer


class AccountList(generics.ListCreateAPIView):
    """List all addresses or create a new Address"""
    #permission_classes = (permissions.IsAuthenticated,)
    model = Account
    queryset = Account.objects.filter()
    #queryset = Account.objects.raw('select oid, csbrequestid, companyid * from app_account')
    serializer_class = AccountSerializer



class AccountDetail(generics.RetrieveUpdateDestroyAPIView):
    """Retrieve, update or delete an Address."""
    #permission_classes = (permissions.IsAuthenticated,)
    model = Account
    queryset = Account.objects.filter()
    #queryset = Account.objects.raw('select oid, csbrequestid, companyid * from app_account')
    serializer_class = AccountSerializer


class BillCollectionList(generics.ListCreateAPIView):
    """List all addresses or create a new Address"""
    #permission_classes = (permissions.IsAuthenticated,)
    model = BillCollection
    queryset = BillCollection.objects.filter()
    serializer_class = BillCollectionSerializer


class BillCollectionDetail(generics.RetrieveUpdateDestroyAPIView):
    """Retrieve, update or delete an Address."""
    #permission_classes = (permissions.IsAuthenticated,)
    model = BillCollection
    queryset = BillCollection.objects.filter()
    serializer_class = BillCollectionSerializer


class MovieList(generics.ListCreateAPIView):
    models = Movie
    queryset = Movie.objects.all()
    serializer_class =  MovieSerializer


class MovieDetail(generics.RetrieveUpdateDestroyAPIView):
    """Retrieve, update or delete an Address."""
    model = Movie
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer


class CustomGet(APIView):
    """
    A custom endpoint for GET request.
    """
    def post(self, request, format=None):
        """
        Return a hardcoded response.
        """
        content = "Hello Marjan"
        status = ""
        dict = {"username": "marjan", "password": "1234"}
        if (dict.get("username") == "marjan" and dict.get("password")=="1234"):
            status = "success"
        else:
            status = "Login fail"
        def random_with_N_digits(n):
            range_start = 10 ** (n - 1)
            range_end = (10 ** n) - 1
            return randint(range_start, range_end)

        random = random_with_N_digits(7)
        if(status == "success"):
           success = True
        else:
            success = False
        return Response({"success": success,"role": {"name": "Marjan", "Login status":status,
                                                     "uniqueHash": uuid.uuid1().hex, "IsActive": "A"} ,
                         "content": content, "rnadom": random})


class ShareView(views.APIView):
    permission_classes = []

    def post(self, request, *args, **kwargs):
        def share_url(email, url):
             return
        email = request.data.get('email', None)
        url = request.data.get('url', None)
        if email and url:
            share_url(email, url)
            return Response({"success": True})
        else:
            return Response({"success": False})

class Custom_list(APIView):
    def get(self, request, format=None):
        customlist = CustomList.objects.all()
        serializer = CustomListSerializer(customlist, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = CustomListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"serializer.data": 100, "status": status.HTTP_201_CREATED})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        customlist = self.get_object(pk)
        customlist.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class Custom_detail(APIView):
    """
    Retrieve, update or delete a user instance.
    """
    def get_object(self, pk):
        try:
            return CustomList.objects.get(pk=pk)
        except CustomList.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        customlist = self.get_object(pk)
        customlist = CustomListSerializer(customlist)
        return Response(customlist.data)

    def put(self, request, pk, format=None):
        customlist = self.get_object(pk)
        serializer = CustomListSerializer(customlist, data=request.DATA)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        customlist = self.get_object(pk)
        customlist.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@csrf_exempt
def AccountListReport(request):
    # Create the HttpResponse object with the appropriate PDF headers.
    response = HttpResponse(content_type='application/pdf')
    response['Content-Disposition'] = 'attachment; filename="AccountListReport.pdf"'
    buffer = BytesIO()

    # Create the PDF object, using the response object as its "file."
    c = canvas.Canvas(buffer, pagesize=A4)
    c.setLineWidth(0.3)
    c.setFont("Helvetica", 22)
    #c.drawString(30,75,"Account List Report")

    c.drawString(220, 800, "Account List Report")

    #logo1 = 'app/image/poweredbycelloscope.png'
    #c.drawImage(logo1, 10, 800, width=120, height=None)

    #Date
    c.setFont("Helvetica-Bold", 12)
    c.drawString(480,750,"01/07/2016")
    c.line(460,747,560,747)

    # Table Header
    styles = getSampleStyleSheet()
    styleBH = styles["Normal"]
    styleBH.alignment = TA_CENTER
    styleBH.fontSize = 10

    slno = Paragraph('''#''', styleBH)
    item = Paragraph('''ItemName''',styleBH)
    b1 = Paragraph('''BIM1''',styleBH)
    b2 = Paragraph('''BIM2''', styleBH)
    b3 = Paragraph('''BIM3''',styleBH)
    total = Paragraph('''Total''',styleBH)

    data = []
    data.append([slno, item, b1, b2, b3, total])

    #Table
    styleN = styles["BodyText"]
    styleN.alignment = TA_CENTER
    styleN.fontSize = 7

    high = 650
    queryset = Account.objects.filter()
    for row in queryset:
        dataRow = [row.accountid, row.accounttitle, row.accountstatus, row.accounttype, row.agentid, row.initialdeposit]
        data.append(dataRow)

        high = high - 18
    # Draw things on the PDF. Here's where the PDF generation happens.
    # See the ReportLab documentation for the full list of functionality.
    #TableSize
    width, height = A4
    table = Table(data, colWidths=[3 * cm, 6.5 * cm, 1.9 * cm, 1.9 * cm, 1.9 * cm, 2.9 * cm])
    table.setStyle(tblstyle=([
        ('INNERGRID', (0,0), (-1,-1), 0.25, colors.black),
        ('BOX', (0, 0), (-1, -1), 0.25, colors.black),
    ]))

    table.wrapOn(c, width, height)
    table.drawOn(c, 30, high)
    c.showPage()
    # Close the PDF object cleanly, and we're done.
    #c.showPage()
    c.save()
    pdf = buffer.getvalue()
    buffer.close()
    response.write(pdf)
    return response