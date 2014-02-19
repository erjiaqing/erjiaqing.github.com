---
layout: post
title: 区间k小数（2）
tags: [OI,数据结构]
category: 笔记
---

如果要修改呢？原来的数据结构是静态的，我们现在要动态的数据结构

23333333

例题：ZOJ 2112 Dynamic Rankings

有修改的区间k大，怎么办？

<ruby>树状数组<rt>暴力+优化</rt></ruby>可解决

不过……<ruby>树状数组<rt>暴力+优化</rt></ruby>这种东西嘛……就是二分答案，判断区间内是否有k个数<ruby>比它大<rt>Smaller than it</rt></ruby>

复杂度分析：

初始化复杂度：$$O(n \log \sqrt{n})$$($$\sqrt{n}$$块，每块$$\sqrt{n}$$个数排序)

查询复杂度：$$O(\sqrt{n}\log\sqrt{n}\log T)$$($$\sqrt{n}$$块，每块$$\sqrt{n}$$个，询问$$\log T$$次，其中T是最大的数减去最小的数，获取分块是常数时间)

修改复杂度：$$O(\sqrt{n} \log \sqrt{n})$$(一次$$\sqrt{n}$$个数的排序)

空间复杂度：$$O(n)$$

BZOJ 1901+ZOJ 2112 AC-Code

{% highlight cpp %}
#include <iostream>
#include <cstdio>
#include <cstring>
#include <algorithm>
using namespace std;
const int __maxn=50005,__block=305;
const int __inf=0x7fffffff,__minf=0x80000000;
int n,m,a[__maxn];
int blocks,size[__block],arr[__block][__block];
int *lower(int * const S,int * const T,const int x)
{
    int * const pos=lower_bound(S,T,x);
    return ((*pos==x)?(upper_bound(S,T,x)-1):(pos-1));
}
int gmin()
{
    int ret=__inf;
    for (int i=0;i<blocks;i++)
        ret=min(ret,arr[i][0]);
    return ret;
}
int gmax()
{
    int ret=__minf;
    for (int i=0;i<blocks;i++)
        ret=max(ret,arr[i][size[i]-1]);
    return ret;
}
int cnt(int S,int T,int x)
{
    int BS=S/__block,BT=T/__block;
    int cnt=0;
    if (BS==BT)
    {
        for (int i=S;i<=T;i++)
            cnt+=a[i]<=x;
        return cnt;
    }
    for (int i=S;i<(BS+1)*__block;i++)
        cnt+=a[i]<=x;
    for (int i=BT*__block;i<=T;i++)
        cnt+=a[i]<=x;
    for (int i=BS+1;i<BT;i++)
        cnt+=lower(arr[i],arr[i]+size[i],x)-arr[i]+1;
    return cnt;
}
void solve()
{
    char str[20];
    int s,t,k,l,r;
    scanf("%d%d",&n,&m);
    for (int i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
        arr[i/__block][size[i/__block]++]=a[i];
    }
    blocks=1+(n-1)/__block;
    for (int i=0;i<blocks;i++)
        sort(arr[i],arr[i]+size[i]);
    while (m--)
    {
        scanf("%s",str);
        if (str[0]=='Q')
        {
            scanf("%d%d%d",&s,&t,&k);
            s--;t--;
            l=gmin()-1;r=gmax();
            while (l+1<r)
            {
                int mid=(l+r)/2;
                int cn=cnt(s,t,mid);
                if (cn>=k)
                    r=mid;
                else
                    l=mid;
            }
            printf("%d\n",r);
        }else
        {
            scanf("%d%d",&s,&k);
            s--;
            int blk=s/__block;
            int pos=lower_bound(arr[blk],arr[blk]+size[blk],a[s])-arr[blk];
            arr[blk][pos]=a[s]=k;
            sort(arr[blk],arr[blk]+size[blk]);
        }
    }
}
int main()
{
    int T;
    scanf("%d",&T);
    while (T--)
    {
        solve();
        memset(size,0,sizeof(size));
    }
    return 0;
}
{% endhighlight %}
