---
layout: post
title: 计算几何-旋转卡壳(2)
tags: [OI,计算几何]
category: note
---

计算几何毁一生，所以我又来毁一生了23333~

例题：给你一堆点，从中挑选出4个点能组成的最大四边形面积。

BZOJ 1069 [SCOI 2007]最大土地面积

理论基础：四个点一定在凸包上

这个实在是太强了！我们枚举四边形相邻的两个顶点，然后可以在均摊$O(1)$的时间内得到相应的对踵点，我们知道，只有对角互为对踵点，面积才可能最大

时间复杂度：$$O(n^2)$$/空间复杂度：$$O(n)$$

AC-Code（省略了模板部分）

{% highlight cpp %}
const int maxn=2005;
Point c[maxn*2],d[maxn];
int n,top;
bool cmp(Point a,Point b)
{
    return (_eq(a.y,b.y)?_l(a.x,b.x):_l(a.y,b.y));
}
double area(Point a,Point b,Point c)
{
    return (b.x-a.x)*(c.y-a.y)-(b.y-a.y)*(c.x-a.x);
}
void chull()
{
    top=1;
    c[0]=d[0];c[1]=d[1];
    for (int i=2;i<n;i++)
    {
        while (top&&_le(area(c[top-1],c[top],d[i]),0))
            top--;
        c[++top]=d[i];
    }
    int len=top;
    c[++top]=d[n-2];
    for (int i=n-3;i>=0;i--)
    {
        while (top>len&&_le(area(c[top-1],c[top],d[i]),0))
            top--;
        c[++top]=d[i];
    }
    for (int i=1;i<top;i++)
        c[i+top]=c[i];
}
double solve()
{
    double ans=0;
    for (int i=0;i<top;i++)
    {
        int l=i+1,r=i+3;
        while ((r<i+n-1)&&_l(area(c[i],c[i+2],c[r]),area(c[i],c[i+2],c[r])))
            r++;
        ans=max(ans,area(c[i],c[l],c[i+2])+area(c[i],c[i+2],c[r]));
        for (int j=i+3;j<i+n-1;j++)
        {
            while (l<j-1&&_l(area(c[i],c[l],c[j]),area(c[i],c[l+1],c[j])))
                l++;
            while (r<i+n-1&&_l(area(c[i],c[j],c[r]),area(c[i],c[j],c[r+1])))
                r++;
            ans=max(ans,area(c[i],c[l],c[j])+area(c[i],c[j],c[r]));
        }
    }
    return ans/2.0;
}
int main()
{
    scanf("%d",&n);
    for (int i=0;i<n;i++)
        scanf("%lf%lf",&d[i].x,&d[i].y);
    sort(&d[0],&d[n],cmp);
    chull();
    printf("%.3lf\n",solve());
    return 0;
}
{% endhighlight %}
