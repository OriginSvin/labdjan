# -*- coding: cp1251 -*-
# Create your views here.

from models import Article
from django.shortcuts import render
from django.http import Http404
from django.shortcuts import redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth import login

def archive(request):
    return render(request, 'archive.html', {"posts": Article.objects.all()})
def get_article(request, article_id):
    try:
        post = Article.objects.get(id=article_id)
        return render(request, 'article.html', {"post": post})
    except Article.DoesNotExist:
        raise Http404

def create_post(request):
    if not request.user.is_anonymous():
        if request.method == "POST":
            form = {
                'text': request.POST["text"],
                'title': request.POST["title"]
            }
            if form["text"] and form["title"]:
                posts = Article.objects.all()
                checkTitle = True
                for post in posts:
                    if post.title == form["title"]:
                        checkTitle = False
                        break
                if checkTitle:
                    article = Article.objects.create(text=form["text"],
                                           title=form["title"],
                                           author=request.user)
                    return redirect('get_article', article_id=article.id)
                else:
                    form['errors'] = u"Это имя уже занято"
                    return render(request, 'create_post.html', {'form': form})
            else:
                form['errors'] = u"Не все поля заполнены"
                return render(request, 'create_post.html', {'form': form})
        else:
            return render(request, 'create_post.html', {})    
    else:
        raise Http404

def create_user(request):
    if request.method == "POST":
        form = {
            'login': request.POST["login"],
            'mail': request.POST["mail"],
            'password': request.POST["password"]
        }
        if form["login"] and form["mail"] and form["password"]:
            try:
                User.objects.get(username = form["login"])
                form['errors'] = u"Такой пользователь уже есть"
                return render(request, 'create_user.html', {'form': form})
            except User.DoesNotExist:
                User.objects.create_user(form["login"], form["mail"], form["password"])
                return redirect('archive')
        else:
            form['errors'] = u"Не все поля заполнены"
            return render(request, 'create_user.html', {'form': form})
    else:
        return render(request, 'create_user.html', {})

def login_user(request):
    if request.method == "POST":
        form = {
            'login': request.POST["login"],
            'password': request.POST["password"]
        }
        if form["login"] and form["password"]:
            user = authenticate(username=form["login"], password=form["password"])
            if user == None:
                form['errors'] = u"Неверный логин или пароль"
                return render(request, 'login_user.html', {'form': form})
            else:
                login(request, user) 
                return redirect('archive')
        else:
            form['errors'] = u"Не все поля заполнены"
            return render(request, 'login_user.html', {'form': form})
    else:
        return render(request, 'login_user.html', {})
    
def test(request):
        form = {'text': request.method}
        return render(request, 'test.html', {'form': form})
        
