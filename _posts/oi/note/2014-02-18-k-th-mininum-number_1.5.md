---
layout: post
title: 区间k小数（1.5）
tags: [OI,数据结构]
category: note
---

如果数字有重复，那么我们上面的程序会出点问题，然后就有了现在的代码

例题：HDU 2665 K-th Number

{% highlight cpp %}
#include <iostream>
#include <cstdio>
#include <cstring>
#include <algorithm>
using namespace std;
const int maxn=100005;
int n,m,arr[maxn],seg[30][maxn],sum[30][maxn];
void build(int dep,int l,int r)
{
    if (l==r)
        return;
    int mid=(l+r)/2;
    int same=mid-l+1;
    for (int i=l;i<=r;i++)
        same-=seg[dep-1][i]<arr[mid];
    for (int i=l,p=l,q=mid+1;i<=r;i++)
    {
        sum[dep-1][i]=i==l?0:sum[dep-1][i-1];
        if (seg[dep-1][i]<arr[mid])
        {
            seg[dep][p++]=seg[dep-1][i];
            ++sum[dep-1][i];
        }else if (seg[dep-1][i]>arr[mid])
        {
            seg[dep][q++]=seg[dep-1][i];
        }else
        {
            if (--same>=0)
            {
                seg[dep][p++]=seg[dep-1][i];
                ++sum[dep-1][i];
            }else
            {
                seg[dep][q++]=seg[dep-1][i];
            }
        }
    }
    build(dep+1,l,mid);
    build(dep+1,mid+1,r);
}
int query(int dep,int S,int T,int l,int r,int k)
{
    if (l==r)
        return seg[dep][l];
    int L=l==S?0:sum[dep][S-1];
    int R=sum[dep][T];
    int mid=(l+r)/2;
    if (R-L>=k)
        return query(dep+1,l+L,l+R-1,l,mid,k);
    else
        return query(dep+1,mid+S-l-L+1,mid+T-l-R+1,mid+1,r,k-R+L);
}
void solve()
{
    scanf("%d%d",&n,&m);
    for (int i=1;i<=n;i++)
    {
        scanf("%d",&arr[i]);
        seg[0][i]=arr[i];
    }
    sort(&arr[1],&arr[n+1]);
    build(1,1,n);
    int ll,rr,kk;
    while (m--)
    {
        scanf("%d%d%d",&ll,&rr,&kk);
        printf("%d\n",query(0,ll,rr,1,n,kk));
    }
}
int main()
{
    int t;
    scanf("%d",&t);
    while (t--)
        solve();
    return 0;
}
{% endhighlight %}
