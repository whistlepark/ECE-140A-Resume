from django.shortcuts import render


# Create your views here.
def home(request):
    """
    Returns basic home page view.
    """
    return render(request,'home.html', context={})
