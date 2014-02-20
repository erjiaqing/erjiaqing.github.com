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

<ruby>Code Forces<rt>膜拜红名大牛贺思睿</rt></ruby>191 E AC Code

{% highlight cpp %}
#include <iostream>
#include <cstring>
#include <cstdio>
#include <algorithm>
using namespace std;
const int maxn=1e5+5,maxt=2e6+5;
typedef long long ll;
int rt[maxn],l[maxt],r[maxt],d[maxt];
ll tot,a[maxn],b[maxn];
void insert(int x,int &y,int L,int R,int v)
{
	d[y=++tot]=d[x]+1;
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
int query(int x,int L,int R,int v)
{
	if (v<0)
		return 0;
	if (L==R)
		return d[x];
	int mid=(L+R)/2;
	if (v<=mid)
		return query(l[x],L,mid,v);
	else
		return d[l[x]]+query(r[x],mid+1,R,v);
}
int main()
{
	int n;
	long long k;
	cin>>n>>k;
	//scanf("%d%lld",&n,&k);
	for (int i=1;i<=n;i++)
	{
		cin>>a[i];
		//scanf("%lld",&a[i]);
		b[i]=(a[i]+=a[i-1]);
	}
	sort(&b[0],&b[n+1]);
	int m=unique(&b[0],&b[n+1])-&b[0];
	for (int i=1;i<=n+1;i++)
		insert(rt[i-1],rt[i],0,m-1,lower_bound(&b[0],&b[m],a[i-1])-&b[0]);
	long long L=-1e14,R=1e14,mid,cnt;
	while (L+1<R)
	{
		mid=(L+R)/2;
		cnt=0;
		for (int i=1;i<=n;i++)
			cnt+=query(rt[i],0,m-1,upper_bound(&b[0],&b[m],a[i]-mid)-&b[1]);
		if (cnt>=k)
			L=mid;
		else
			R=mid;
	}
	cout<<L<<endl;
	//printf("%lld\n",L);
	return 0;
}
{% endhighlight %}

