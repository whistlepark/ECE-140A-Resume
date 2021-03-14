from django.shortcuts import render, HttpResponse

def work(request):
    return render(request,'work.html',{})
