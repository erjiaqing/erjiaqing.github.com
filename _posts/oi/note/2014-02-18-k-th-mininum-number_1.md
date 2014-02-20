---
layout: post
title: 区间k小数（1）
tags: [OI,数据结构]
category: 笔记
---

在线段树的学习当中，我们会了解到线段树的应用之一就是求<ruby>**区间极值**<rt>Range Maxinum/Minium Query</rt></ruby>，比如区间最大值，区间最小值等等。这一类值都有一个性质就是满足区间加法的性质，即两个区间的区间最大值等于两个区间各自的最大值中较大的一个，但是，如果是求<ruby>区间k小数<rt>Range K-th number</rt></ruby>的话，就不能用简单的区间加法实现。

但是，我们注意到，在归并排序的过程中，我们其实实现了类似于区间加法的区间合并的操作，因而，我们可以在归并排序的过程中建<ruby>线段树<rt>Segment Tree</rt></ruby>，用$$T_{i,j}$$表示递归第$$i$$层中第$$j$$位的数字。

同时用$$S_{i,j}$$表示在归并第$$i$$层中位置$$j$$的左侧数字数量（即，比它小的数字数量）

然后，在<ruby>询问<rt>Query</rt></ruby>过程中我们二分即可。

例题：POJ 2104 K-th Number（这明明是OI题好么？）

{% highlight cpp %}
#include <iostream>
#include <cstdio>
#include <cstring>
#include <algorithm>
#include <utility>
using namespace std;
typedef pair<int,int> II;
int n,m,s[30][100005],a[30][100005];
II b[100005];
void build(int dep,int l,int r)
{
    if (l==r)
        return;
    int mid=(l+r)/2;
    int cl=0,L=l-1,R=mid;
    for (int i=l;i<=r;i++)
    {
        if (L<=mid&&a[dep-1][i]<=b[mid].first)
        {
            a[dep][++L]=a[dep-1][i];
            s[dep][i]=++cl;
        }else
        {
            a[dep][++R]=a[dep-1][i];
            s[dep][i]=cl;
        }
    }
    build(dep+1,l,mid);
    build(dep+1,mid+1,r);
}
int query(int dep,int S,int T,int l,int r,int k)
{
    if (l==r)
        return a[dep-1][l];
    int mid,L,R;
    mid=(S+T)/2;
    L=(l==S)?0:s[dep][l-1];
    R=s[dep][r];
    if (R-L>=k)
        return query(dep+1,S,mid,S+L,S+R-1,k);
    else
        return query(dep+1,mid+1,T,mid+1+l-S-L,mid+1+r-S-R,k-R+L);
}
int main()
{
    scanf("%d%d",&n,&m);
    for (int i=1;i<=n;i++)
    {
        scanf("%d",&b[i].first);
        b[i].second=i;
        a[0][i]=b[i].first;
    }
    sort(&b[1],&b[n+1]);
    build(1,1,n);
    int l,r,k;
    while (m--)
    {
        scanf("%d%d%d",&l,&r,&k);
        printf("%d\n",query(1,1,n,l,r,k));
    }
    return 0;
}
{% endhighlight %}
