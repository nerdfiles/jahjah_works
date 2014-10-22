# -*- coding: utf-8 -*-

from django.conf import settings
#from django.utils.http import urlquote
#from django.contrib.auth import REDIRECT_FIELD_NAME
from django.middleware.csrf import get_token
#from kilakilakila import *
from django.shortcuts import get_object_or_404
import os
from livesettings import config_value

DEBUG = settings.DEBUG

STRIPE_TEST_MODE = config_value('jahjahworks', 'STRIPE_TEST_MODE')
if DEBUG == True or STRIPE_TEST_MODE == True:
    settings.STRIPE_PUBLIC_KEY = os.environ.get(
        "STRIPE_PUBLIC_KEY",
        config_value('jahjahworks', 'STRIPE_TEST_PUBLIC_KEY'))

    settings.STRIPE_SECRET_KEY = os.environ.get(
        "STRIPE_SECRET_KEY",
        config_value('jahjahworks', 'STRIPE_TEST_SECRET_KEY'))
else:
    settings.STRIPE_PUBLIC_KEY = os.environ.get(
        "STRIPE_PUBLIC_KEY",
        config_value('jahjahworks', 'STRIPE_LIVE_PUBLIC_KEY'))

    settings.STRIPE_SECRET_KEY = os.environ.get(
        "STRIPE_SECRET_KEY",
        config_value('jahjahworks', 'STRIPE_LIVE_SECRET_KEY'))


'''
def generic_links(request):
    from generic_links.models import GenericLink
    from generic_links.utils import get_links_for
    from django.contrib.contenttypes.models import ContentType
    link = get_object_or_404(GenericLink, pk=2)
    try:
      ct = ContentType.objects.get(pk=48)
      qs = get_links_for(ct, is_external=True)
      return {
          'base_links': link
      }
    except Exception as e:
      print '%s (%s)' % (e.message,  type(e))
    else:
      return {
          'base_links': link
      }
'''

def date_formats(request):
    return {
        'date_format_long': 'l j F Y',
    }


def site_info(request):
    import datetime
    dt = datetime
    today = dt.datetime.today()
    formatted_today = today.strftime("%d-%b-%Y")
    host = request.META.get('HTTP_HOST', '')
    #port = request.META.get('SERVER_PORT', '')
    token = get_token(request)

    if request.is_secure:
        proto = 'https'
    else:
        proto = 'http'

    site_url = '%s://%s' % (proto, host)
    assets_url_base = '//%s' % host
    assets_url = settings.STATIC_URL
    public_key = settings.STRIPE_PUBLIC_KEY

    # if host == "localhost":
    #  site_url = 'http://%s:%s' % (host, port,)

    if settings.LOCAL_DEVELOPMENT:
        assets_url = settings.MEDIA_URL

    return {
        'TODAY': formatted_today,
        'SITE_URL': site_url,
        'ASSETS_URL': assets_url_base + assets_url,
        'CSRF_TOKEN': token,
        'STRIPE_PUBLIC_KEY': public_key
    }
