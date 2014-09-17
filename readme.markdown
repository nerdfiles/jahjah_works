#[jahjah.works](https://jahjah.works) | [dash](https://jahjah.works/dashboard/) | [docs](https://jahjah.works/dashboard/docs/) | [repo](https://github.com/nerdfiles/jahjah_works) | [reqs](jahjah_works/blob/master/.requirements) | [lic](jahjah_works/blob/master/LICENSE)

This repo contains development code for http://jahjah.works, Jah Jah G., 
a Houston-based artist, musician, traveler.

##Install

    $ pyenv install 2.7.6
    $ pyenv local 2.7.6
    $ pyenv virtualenv jahjah_works
    $ pip install -r .requirements
    $ python manage.py syncdb --all
    $ python manage.py collectstatic
    $ python manage.py runserver

###Precautions

This stack’s .requirements do not work in Python3-land. Minimal testing done 
with pyenv across a few Pythons (2.7.7 and 3.4.0).

##Project

1. https://trello.com/b/k7lV0wSG/jahjah-works

##TODO

1. Run analytics on CSS to reduce payload, redundancy (poorly used ``@mixins``),  
   and unused selectors.
