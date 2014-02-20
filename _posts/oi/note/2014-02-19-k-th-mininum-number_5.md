---
layout: post
title: 区间k小数（5）
tags: [OI,数据结构]
category: note
---

Question：给你一列树，问第k大的区间和是多少

事实上，这题和可持久话数据结构并没有多大的关系，我们需要维护的……不过是区间和而已

第一步，预处理区间和，就记为$$S_i$$吧

第二步，二分答案$$ans$$，同时枚举结束点$$i$$，然后搞到$$j\in [0,i]$$之间$$S_i-S_j\ge ans$$的$$j$$个数

第三步，输出$$ans$$

时间复杂度

预处理|二分枚举|总复杂度
------|---------|--------
$$O(n)$$|$$O(n \log n)$$|$$O(n \log n)$$

这一题和《超级钢琴》那题有点像，但是这一题由于$$k\in O(n^2)$$而会超时（此方法复杂度$$O(n^2 \log n)$$）

<ruby>Code Forces<rt>膜拜红名大牛贺思瑞</rt></ruby>191 E AC Code

{% highlight cpp %}
#include <iostream>
#include <cstring>
#include <cstdio>
#include <algorithm>
#include <vector>
using namespace std;
const int maxn=1e5+5,maxt=1800005;
vector <int> E[maxn];
typedef vector<int>::iterator ii;
int v[maxn];
int lg[maxn];
int f[maxn][20],size,a[maxn],b[maxn],d[maxn],rt[maxn];
int l[maxt],r[maxt],s[maxt];
int n,m;
//又见动态开点线段树
void insert(int x,int &y,int L,int R,int v)
{
	s[y=++size]=s[x]+1;
	if (L==R)
		return;
	int mid=(L+R)/2;
	if (v<=mid)
	{
		r[y]=r[x];
		insert(l[x],l[y],L,mid,v);
	}else
	{
		l[y]=l[x];
		insert(r[x],r[y],mid+1,R,v);
	}
}
void dfs(int u,int dep)
{
	d[u]=dep+1;
	insert(rt[f[u][0]],rt[u],1,m,lower_bound(&b[1],&b[m+1],a[u])-&b[0]);
	for (int k=1;k<=lg[dep];++k)
		f[u][k]=f[f[u][k-1]][k-1];
	for (ii k=E[u].begin();k!=E[u].end();k++)
	{
		if (!d[*k])
		{
			f[*k][0]=u;
			dfs(*k,d[u]);
		}
	}
}
int lca(int u,int v)
{
	if (d[u]>d[v])
		swap(u,v);
	while (d[v]>d[u])
		v=f[v][lg[d[v]-d[u]]];
	if (u==v)
		return u;
	for (int k=lg[d[u]-1];k>=0;k--)
	{
		if (f[u][k]!=f[v][k])
		{
			u=f[u][k];
			v=f[v][k];
		}
	}
	return f[u][0];
}
int query(int x,int y,int z1,int z2,int L,int R,int v)
{
	if (L==R)
		return L;
	int mid=(L+R)/2;
	int cur=s[l[x]]+s[l[y]]-s[l[z1]]-s[l[z2]];
	if (v<=cur)
		return query(l[x],l[y],l[z1],l[z2],L,mid,v);
	else
		return query(r[x],r[y],r[z1],r[z2],mid+1,R,v-cur);
}
int main()
{
	int q,u,v,k,c;
	scanf("%d%d",&n,&q);
	for (int i=1;i<=n;i++)
	{
		scanf("%d",&a[i]);
		b[i]=a[i];
		lg[i]=lg[i-1]+(i==(1<<(lg[i-1]+1)));
	}
	sort(&b[1],&b[n+1]);
	m=unique(&b[1],&b[n+1])-&b[1];
	for (int i=1;i<n;i++)
	{
		scanf("%d%d",&u,&v);
		E[u].push_back(v);
		E[v].push_back(u);
	}
	dfs(1,0);
	while (q--)
	{
		scanf("%d%d%d",&u,&v,&k);
		c=lca(u,v);
		printf("%d\n",b[query(rt[u],rt[v],rt[c],rt[f[c][0]],1,m,k)]);
	}
	return 0;
}
{% endhighlight %}

