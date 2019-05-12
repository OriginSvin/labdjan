# -*- coding: cp1251 -*-
from models import Article
from django.shortcuts import render
from django.http import Http404
from django.shortcuts import redirect

def archive(request):
	return render(request, 'archive.html', {"posts":Article.objects.all()})
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
                                chek=True
                                posts = Article.objects.all()
                                for post in posts:
                                        if post.title==form["title"]:
                                                chek=False
                                                break
                                if chek:
                                
                                        article=Article.objects.create(text=form["text"],
                                                               title=form["title"],
                                                              author=request.user)
                                        return redirect('get_article', article_id=article.id)
                                else:
                                        form['errors'] = u"Имя занято"
                                        return render(request, 'create_post.html', {'form': form})
                                        
                                        
                        else:
                                form['errors'] = u"Не все поля заполнены"
                                return render(request, 'create_post.html', {'form': form})
                else:
                        return render(request, 'create_post.html', {})
        else:
                raise Http404
