from django.urls import path, re_path
from . import views
urlpatterns = [
    path(r'home/', views.home, name="home"),
    # re_path(r'^market/(\d+)?/(\d+)?/$', views.market, name="market"),
    # re_path(r'^market/?P<categoryid>(\d+)/?P<cid>(\d+)/$', views.market, name="market"),
    path(r'market/<categoryid>/<cid>/<sortid>/', views.market, name="market"),
    path(r'changecart/<flag>/', views.changecart, name="changecart"),
    path(r'cart/', views.cart, name="cart"),
    path(r'cart/', views.cart, name="cart"),

    path(r'mine/', views.mine, name="mine"),

    # 登录
    path(r'login/', views.login, name="login"),
    # 退出登录
    path(r'quit/', views.quit, name="quit"),
    # 注册
    path(r'register/', views.register, name="register"),
    # 验证账号是否被注册
    path(r'checkuserid/', views.checkuserid, name="checkuserid"),
    # 下订单
    path(r'saveorder/', views.saveorder, name="saveorder"),

]
