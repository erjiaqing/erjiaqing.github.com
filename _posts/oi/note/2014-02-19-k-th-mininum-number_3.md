---
layout: post
title: 区间k小数（3）
tags: [OI,数据结构]
category: 笔记
---

这回是区间修改

在数列的一个区间上加上一个数$$c$$求<ruby>区间k大<rt>Range k-th query</rt></ruby>

<ruby>线段树<rt>Binary Index Tree</rt></ruby>套线段树

首先，用<ruby>线段树<rt>Binary Index Tree</rt></ruby>来维护各个<ruby>点<rt>区间</rt></ruby>，用线段树维护权值，在询问时，将两个“版本”的线段树相减就相当于获取的区间的树，这里版本只是形象的说法，我们认为每个位置都是一个版本。

参考：[http://hi.baidu.com/strongoier/item/3f496e24e8c05af750fd87d4](http://hi.baidu.com/strongoier/item/3f496e24e8c05af750fd87d4)

我还是不大懂，等我继续学习之后更新一下。

BZOJ 3110 AC Code

{% highlight cpp %}
#include <iostream>
#include <cstdio>
#include <cstring>
#include <algorithm>
using namespace std;
const int maxn=50005,maxm=50005,maxt=3*1e7;
struct query{
	int q,a,b,c;
}q[maxm];
int n,m,tot,
	a[maxn],//值
	v[maxn],
	rt[maxn],//根
	u[maxn],
	c[maxt],
	d[maxt],
	l[maxt],r[maxt];//标记左子树和右子树
void insert(//动态开点的平衡树
		int &x,
		int L,
		int R,
		int k,
		int v1,
		int v2)
{
	if (!x)
		x=++tot;//为结点分配编号（ID/内存）
	c[x]+=v1;
	d[x]+=v2;
	if (L==R)
		return;
	int mid=(L+R)/2;
	if (k<=mid)
		insert(l[x],L,mid,k,v1,v2);
	else
		insert(r[x],mid+1,R,k,v1,v2);
}
int lowbit(int x)
{
	return x&(-x);
}
void update(int x,int k,int v1,int v2)
{
	for (;x<=n;x+=lowbit(x))
		insert(rt[x],1,m,k,v1,v2);
}
int getsum1(int x)
{
	int ret=0;
	for (;x;x-=lowbit(x))
		ret+=c[r[u[x]]];
	return ret;
}
int getsum2(int x)
{
	int ret=0;
	for (;x;x-=lowbit(x))
		ret+=d[r[u[x]]];
	return ret;
}
void init(int x)
{
	for (;x;x-=lowbit(x))
	{
		u[x]=rt[x];
		v[x]=0;
	}
}
void turnl(int x,int cnt)
{
	for (;x;x-=lowbit(x))
		if (v[x]!=cnt)
		{
			u[x]=l[u[x]];
			v[x]=cnt;
		}
}
void turnr(int x,int cnt)
{
	for (;x;x-=lowbit(x))
		if (v[x]!=cnt)
		{
			u[x]=r[u[x]];
			v[x]=cnt;
		}
}
int main()
{
	int qc;
	scanf("%d%d",&n,&qc);
	for (int i=0;i<qc;i++)
	{
		scanf("%d%d%d%d",&q[i].q,&q[i].a,&q[i].b,&q[i].c);
		if (q[i].q==1)
			a[++m]=q[i].c;
	}
	sort(&a[1],&a[m+1]);
	m=unique(&a[1],&a[m+1])-&a[1];
	for (int i=0;i<qc;i++)
	{
		if (q[i].q==1)
		{
			update(q[i].a,lower_bound(&a[1],&a[m+1],q[i].c)-&a[0],1,q[i].a);
			update(q[i].b+1,lower_bound(&a[1],&a[m+1],q[i].c)-&a[0],-1,-q[i].b-1);
		}else
		{
			init(q[i].b);
			init(q[i].a-1);
			int L=1,R=m,cnt=0;
			while (L<R)
			{
				cnt++;
				int sb=(q[i].b+1)*getsum1(q[i].b)-getsum2(q[i].b);
				int sa=q[i].a*getsum1(q[i].a-1)-getsum2(q[i].a-1);
				int cur=sb-sa,mid=(L+R)/2;
				if (q[i].c<=cur)
				{
					L=mid+1;
					turnr(q[i].b,cnt);
					turnr(q[i].a-1,cnt);
				}else
				{
					R=mid;
					q[i].c-=cur;
					turnl(q[i].b,cnt);
					turnl(q[i].a-1,cnt);
				}
			}
			printf("%d\n",a[L]);
		}
	}
	return 0;
}
{% endhighlight %}

