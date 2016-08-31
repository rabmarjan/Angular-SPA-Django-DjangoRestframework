from django.db import models
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from django.db.models.signals import post_save
from django.dispatch import receiver


@receiver(post_save, sender=User)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    ''' Creates a token whenever a User is created '''
    if created:
        Token.objects.create(user=instance)


class Address(models.Model):
    ''' Model features for an address '''
    street = models.CharField(max_length=200)
    city = models.CharField(max_length=200)
    state = models.CharField(max_length=200)
    country = models.CharField(max_length=200)

    def __unicode__(self):
        return u'%s, %s, %s' % (self.street, self.city, self.state)

    class Meta:
        verbose_name_plural = 'Address'


class CustomList(models.Model):
    user_id = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    status = models.BooleanField(False)


class Account(models.Model):
    accountid = models.CharField(primary_key=True, max_length=64)
    bankaccountno = models.CharField(max_length=64, null=True)
    mnemonic = models.CharField(max_length=64, null=True)
    accounttitle = models.CharField(max_length=128, null=True)
    enrollmenttype = models.CharField(max_length=64, null=True)
    accountjson = models.CharField(max_length=4096, null=True)
    mobileno = models.CharField(max_length=32, null=True)
    initialdeposit = models.DecimalField(max_digits=20, decimal_places=6, null=True)
    initialdepositrefid = models.CharField(max_length=256, null=True)
    initialdepositblockrefno = models.CharField(max_length=64, null=True)
    cbsrefno = models.CharField(max_length=256, null=True)
    decode = models.CharField(max_length=128, null=True)
    applicationdate = models.DateTimeField(null=True)
    accounttype = models.CharField(max_length=4, null=True)
    accountcategory = models.CharField(max_length=4, null=True)
    schemename = models.CharField(max_length=32, null=True)
    schemetype = models.CharField(max_length=4, null=True)
    schemeperiod = models.CharField(max_length=4, null=True)
    schemeperiodtype = models.CharField(max_length=4, null=True)
    renewbothprincipalinterest = models.CharField(max_length=2, null=True)
    renewprincipal = models.CharField(max_length=2, null=True)
    productid = models.CharField(max_length=16, null=True)
    productname = models.CharField(max_length=32, null=True)
    monthlyinstallment = models.DecimalField(max_digits=20, decimal_places=6, null=True)
    interestrate = models.DecimalField(max_digits=20, decimal_places=6, null=True)
    schemeamount = models.DecimalField(max_digits=20, decimal_places=6, null=True)
    startdate = models.DateTimeField(null=True)
    maturitydate = models.DateTimeField(null=True)
    maturityamount = models.DecimalField(max_digits=20, decimal_places=6, null=True)
    numberofinstallment = models.DecimalField(max_digits=4, decimal_places=0, null=True)
    giveninstallment = models.DecimalField(max_digits=4, decimal_places=0, null=True)
    encashonmaturity = models.CharField(max_length=2, null=True)
    debitaccountno = models.CharField(max_length=64, null=True)
    creditinterestaccountno = models.CharField(max_length=64, null=True)
    encashmentaccountno = models.CharField(max_length=64, null=True)
    submitterid = models.CharField(max_length=64, null=True)
    dstapproverid = models.CharField(max_length=64, null=True)
    makerid = models.CharField(max_length=64, null=True)
    checkerid = models.CharField(max_length=64, null=True)
    approverid = models.CharField(max_length=64, null=True)
    accountstatus = models.CharField(max_length=4, null=True)
    rejectioncause = models.TextField(null=True)
    openingdate = models.DateTimeField(null=True)
    closingdate = models.DateTimeField(null=True)
    csbrequestid = models.CharField(max_length=300, null=True)
    lockedby = models.CharField(max_length=64, null=True)
    lockedon = models.DateTimeField(null=True)
    lockstatus = models.CharField(max_length=16, null=True)
    traceid = models.CharField(max_length=64, null=True)
    kycriskscore = models.IntegerField(null=True)
    kycriskscoredata = models.TextField(null=True)
    agentid = models.CharField(max_length=64, null=True)
    servicepointid = models.CharField(max_length=64, null=True)
    branchid = models.CharField(max_length=64, null=True)
    bankid = models.CharField(max_length=64, null=True)
    createdby = models.CharField(max_length=64, null=True)
    createdon = models.DateTimeField(null=True)
    updatedby = models.CharField(max_length=64, null=True)
    updatedon  = models.DateTimeField(null=True)


class Movie(models.Model):
    _id = models.AutoField(primary_key=True)
    tittle = models.CharField(max_length=300)
    releaseYear = models.DateTimeField(null=True)
    director = models.CharField(max_length=300)
    genre = models.CharField(max_length=200)


class BillCollection(models.Model):
    oid = models.CharField(max_length=64, primary_key=True)
    csbrequestid = models.CharField(max_length=200, null=True)
    cbsreferanceid = models.CharField(max_length=200, null=True)
    companyid = models.CharField(max_length=64)
    zoneid = models.CharField(max_length=64, null=True)
    zonecode = models.CharField(max_length=100, null=True)
    entrydate = models.DateTimeField()
    duedate = models.DateTimeField()
    billpaymentmonth = models.CharField(max_length=100, blank=False)
    customername = models.CharField(max_length=200)
    customermobileno = models.CharField(max_length=200)
    meterno = models.CharField(max_length=200)
    usedunit = models.DecimalField(max_digits=20, decimal_places=6)
    billreferencenumber = models.CharField(max_length=200)
    booknumber = models.CharField(max_length=100)
    billamount = models.DecimalField(max_digits=20, decimal_places=6)
    vatamount = models.DecimalField(max_digits=20, decimal_places=6)
    meterrent = models.DecimalField(max_digits=20, decimal_places=6)
    transformerrent = models.DecimalField(max_digits=20, decimal_places=6)
    penalty = models.DecimalField(max_digits=20, decimal_places=6)
    othersfee = models.DecimalField(max_digits=20, decimal_places=6)
    latefee = models.DecimalField(max_digits=20, decimal_places=6)
    netbillamount = models.DecimalField(max_digits=20, decimal_places=6)
    customerid = models.CharField(max_length=200)
    billtype = models.CharField(max_length=64)
    paymenttype = models.CharField(max_length=16)
    accountnumber = models.CharField(max_length=200)
    debitaccount = models.CharField(max_length=200)
    creditaccount = models.CharField(max_length=200)
    revenuecount = models.DecimalField(max_digits=4, decimal_places=0)
    submitterid = models.CharField(max_length=64)
    makerid = models.CharField(max_length=64)
    checkerid = models.CharField(max_length=64)
    approverid = models.CharField(max_length=64)
    billstatus = models.CharField(max_length=8)
    rejectioncause = models.CharField(max_length=512)
    agentid = models.CharField(max_length=64)
    servicepointid = models.CharField(max_length=64)
    branchid = models.CharField(max_length=64)
    bankid = models.CharField(max_length=64)
    submitiondate = models.DateTimeField()
    transactiondate = models.DateTimeField()
    valuejson = models.TextField()
    cutagentcharge = models.CharField(max_length=2)
    createdby = models.CharField(max_length=64)
    createdon = models.DateTimeField()
    updatedby = models.CharField(max_length=64)
    updatedon = models.DateTimeField()


































