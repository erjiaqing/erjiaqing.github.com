---
layout: post
title: 计算几何-旋转卡壳(1)
tags: [OI,计算几何]
category: note
---

计算几何毁一生，所以我来毁一生了23333~

例题：给你一堆点，问你能把所有点都套起来的最小面积的长方形。

<ruby>UVA-10173<rt>Orz=汝佳教主</rt></ruby> Smallest Bounding Rectangle

理论基础：最小面积的长方形**一定**贴着凸包上的一条边

这个实在是太强了！我们枚举凸包上的边，作垂线，就够了

时间复杂度：$$O(n)$$/空间复杂度：$$O(n)$$

AC-Code

```cpp
#include <iostream>
#include <cstdio>
#include <cstring>
#include <algorithm>
#include <cmath>
using namespace std;
const int maxn=1005;
const double eps=1e-6;
struct point{
    double x,y;
}c[maxn];
int n;
bool _eq(double a,double b)
{
    return (fabs( a - b ) < eps);
}
bool _le(double a,double b)
{
    return (a < b - eps);
}
bool _lee(double a,double b)
{
    return (a < b + eps);
}
bool _ge(double a,double b)
{
    return (a > b + eps);
}
double cross(point a,point b,point c)
{
    return (c.x-a.x)*(b.y-a.y)-(c.y-a.y)*(b.x-a.x);
}
double dist(point a,point b)
{
    return sqrt(pow(a.x-b.x,2)+pow(a.y-b.y,2));
}
double seg(point a,point l1,point l2)
{
    return fabs(cross(a,l1,l2))/dist(l1,l2);
}
bool comp(point a,point b)
{
    double len=cross(c[0],a,b);
    if (_eq(len,0))
        return _le(dist(c[0],a),dist(c[0],b));
    else
        return _le(len,0);
}
point footline(point a,point l1,point l2)
{
    point ret;
    l2.x-=l1.x;l2.y-=l1.y;
    ret.x=a.x-l2.y;
    ret.y=a.y+l2.x;
    return ret;
}
int top;
double graham()
{
    int tmp=0;
    for (int i=1;i<n;i++)
        if (_le(c[i].x,c[tmp].x)||_eq(c[i].x,c[tmp].x)&&_le(c[i].y,c[tmp].y))
            tmp=i;
    swap(c[0],c[tmp]);
    sort(&c[1],&c[n],comp);
    top=1;
    for (int i=2;i<n;i++)
    {
        while (_lee(cross(c[top],c[top-1],c[i]),0)&&top>=1)
            top--;
        c[++top]=c[i];
    }
    return top+1;
}
double angle(point a1,point a2,point b1,point b2)
{
    point t;
    t.x=b2.x-(b1.x-a1.x);
    t.y=b2.y-(b1.y-a1.y);
    return cross(a1,a2,t);
}
double solve(int n)
{
    int r[4];
    memset(r,0,sizeof(r));
    for (int i=0;i<n;i++)
    {
        if (_le(c[i].y,c[r[0]].y))
            r[0]=i;
        if (_le(c[i].x,c[r[1]].x))
            r[1]=i;
        if (_ge(c[i].y,c[r[2]].y))
            r[2]=i;
        if (_ge(c[i].x,c[r[3]].x))
            r[3]=i;
    }
    int tp=r[0];
    double ans=1e20;
    do
    {
        point t=footline(c[r[0]],c[r[0]],c[(r[0]+1)%n]);
        while (_ge(angle(t,c[r[0]],c[r[1]],c[(r[1]+1)%n]),0))
            (r[1]+=1)%=n;
        while (_ge(angle(c[r[0]],t,c[r[3]],c[(r[3]+1)%n]),0))
            (r[3]+=1)%=n;
        while (_ge(seg(c[(r[2]+1)%n],c[r[0]],c[(r[0]+1)%n]),seg(c[r[2]],c[r[0]],c[(r[0]+1)%n])))
            (r[2]+=1)%=n;
        double a=seg(c[r[2]],c[r[0]],c[(r[0]+1)%n]);
        t=footline(c[r[3]],c[r[0]],c[(r[0]+1)%n]);
        double b=seg(c[r[1]],c[r[3]],t);
        ans=min(ans,a*b);
        (r[0]+=1)%=n;
    }while (r[0]!=tp);
    return ans;
}
int main()
{
    while (~scanf("%d",&n)&&n)
    {
        for (int i=0;i<n;i++)
            scanf("%lf%lf",&c[i].x,&c[i].y);
        if (n<=2)
        {
            printf("0.0000\n");
            continue;
        }
        printf("%.4lf\n",solve(graham()));
    }
    return 0;
}
```
