# Issues

## DoesNotExist for /

### Error

DoesNotExist: Site matching query does not exist. Lookup parameters were {'pk': 1}

### Fix

Doing the following will make django fix itself:

	paython (geonode)xertrov@x-work:~/geonode/geonode$ python manage.py shell
	Python 2.7.4 (default, Apr 19 2013, 18:28:01) 
	[GCC 4.7.3] on linux2
	Type "help", "copyright", "credits" or "license" for more information.
	(InteractiveConsole)
	>>> from django.contrib.sites.models import Site
	>>> n = Site.objects.create(domain='foo.com',name='foo.com')
	>>> print n.id
	1

Ensure n.id is the same as SITE_ID in settings.py and you should be good to go



