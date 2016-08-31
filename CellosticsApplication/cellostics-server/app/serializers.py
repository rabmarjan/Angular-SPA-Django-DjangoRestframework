from .models import *
from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    """Serializes a User object"""
    class Meta:
        model = User
        fields = ('id', 'username')


class AddressSerializer(serializers.ModelSerializer):
    """Serializes an Address object"""
    class Meta:
        model = Address



class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ('accountid', 'bankaccountno', 'mnemonic', 'accounttitle', 'enrollmenttype', 'accountjson', 'mobileno',
                  'initialdeposit', 'initialdepositrefid', 'initialdepositblockrefno', 'cbsrefno', 'decode',
                  'applicationdate', 'accounttype', 'accountcategory', 'schemename', 'schemetype', 'schemeperiod',
                  'schemeperiodtype', 'renewbothprincipalinterest', 'renewprincipal', 'productid', 'productname',
                  'monthlyinstallment', 'interestrate', 'schemeamount', 'startdate', 'maturitydate', 'maturityamount',
                  'numberofinstallment', 'giveninstallment', 'encashonmaturity', 'debitaccountno',
                  'creditinterestaccountno', 'encashmentaccountno', 'submitterid', 'dstapproverid', 'makerid',
                  'checkerid', 'approverid', 'accountstatus', 'rejectioncause', 'openingdate', 'closingdate',
                  'csbrequestid', 'lockedby', 'lockedon', 'lockstatus','traceid', 'kycriskscore', 'kycriskscoredata',
                  'agentid', 'servicepointid', 'branchid', 'bankid', 'createdby', 'createdon', 'updatedby', 'updatedon')


class BillCollectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = BillCollection
        fields = ('oid', 'csbrequestid', 'cbsreferanceid', 'companyid', 'zoneid', 'zonecode', 'entrydate', 'duedate',
                  'billpaymentmonth', 'customername', 'customermobileno', 'meterno', 'usedunit', 'billreferencenumber',
                  'booknumber', 'billamount', 'vatamount', 'meterrent', 'transformerrent', 'penalty', 'othersfee',
                  'latefee', 'netbillamount', 'customerid', 'billtype', 'paymenttype', 'accountnumber', 'debitaccount',
                  'creditaccount', 'revenuecount', 'submitterid', 'makerid', 'checkerid', 'approverid', 'billstatus',
                  'rejectioncause', 'agentid', 'servicepointid', 'branchid', 'bankid', 'submitiondate',
                  'transactiondate', 'valuejson', 'cutagentcharge', 'createdby', 'createdon', 'updatedby', 'updatedon')


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('_id', 'tittle', 'releaseYear', 'director', 'genre')


class CustomListSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomList
        fields = ('user_id', 'password', 'status')





