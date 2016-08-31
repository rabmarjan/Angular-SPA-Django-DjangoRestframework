from django.db import models
import binascii
import os
from django.contrib.auth.models import User



class Token(models.Model):
    user = models.ForeignKey(User)
    token = models.CharField(max_length=40, primary_key=True)
    created = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.token:
            self.token = self.generate_token()
        return super(Token, self).save(*args, **kwargs)

    def generate_token(self):
        return binascii.hexlify(os.urandom(20)).decode()

    def __unicode__(self):
        self.token


class Role(models.Model):
    user = models.ForeignKey(User)
    roleid = models.CharField(max_length=200, primary_key=True)
    rolename = models.CharField(max_length=200)
    rolejson = models.TextField()
