---
layout: post
title: 计算几何-模版
tags: [OI,计算几何]
category: note
---

计算几何毁一生，所以我来毁一生了23333~

这里是计算几何的通用模版（最后更新：20140221）（2维）

有误请指出，谢谢

```cpp
//-- 必载库
#include <iostream>
#include <cstdio>
#include <cstring>
#include <algorithm>
#include <cmath>
using namespace std;
//-- 浮点数运算
const double eps=1e-8;
bool _l (double a,double b){return a<b-eps;}
bool _g (double a,double b){return b<a-eps;}
bool _le(double a,double b){return a<b+eps;}
bool _ge(double a,double b){return b<a+eps;}
bool _eq(double a,double b){return fabs(a-b)<eps;}
//-- 点和向量
struct Point
{
    double x,y;
    Point(){}
    Point(double _x,double _y):x(_x),y(_y){}
    bool   operator == (Point a){return (fabs(a.x-x)<eps)&&(fabs(a.y-y)<eps);}
    bool   operator != (Point a){return !((*this)==a);}
    bool   operator <  (Point a){return _l(a.y,y)||(_eq(a.y,y)&&_l(a.x,x));}
    bool   operator >  (Point a){return _l(y,a.y)||(_eq(a.y,y)&&_l(x,a.x));}
    Point  operator +  (Point a){return Point(x+a.x,y+a.y);}
    Point  operator -  (Point a){return Point(x-a.x,y-a.y);}
    double operator *  (Point a){return a.x*x+a.y*y;}
    double operator &  (Point a){return x*a.y-y*a.x;}
    Point  operator ~  (void)   {return Point(y,-x);}
    friend Point operator *  (double a,Point  b){return Point(a*b.x,a*b.y);}
    friend Point operator *  (Point  b,double a){return Point(a*b.x,a*b.y);}
};
//-- Line
struct Line
{
    Point a,b;
    Point operator * (Point p)
    {
        double x1 = a.x,x2=b.x,y1=a.y,y2=b.y;
        double A=y1-y2,B=x2-x1,C=x1*y2-x2*y1;
        double delta=(A*p.x+B*p.y+C)/(A*A+B*B);
        return Point(p.x-2*A*delta,p.y-2*B*delta);
    }
}
double dist(Point a,Point b){return sqrt(pow(a.x-b.x,2)+pow(a.y-b.y,2));}
typedef Point Vector;
//-- 完毕
```
