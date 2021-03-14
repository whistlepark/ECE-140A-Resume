from django import template
from django.urls import reverse

register = template.Library()

@register.simple_tag
def is_active(request, url):
    """
    Returns 'active' if current url matches request.
    """
    if request.path == '/' and url == 'home':
        return "active"
    elif request.path != '/' and request.path in reverse(url):
        return "active"
    return ""
