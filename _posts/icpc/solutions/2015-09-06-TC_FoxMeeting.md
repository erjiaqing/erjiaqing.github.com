---
layout: post
title: TCO15 Round 2A 600:FoxMeeting
tags: [TCO,网络流]
category: TCO
---

[试题:FoxMeeting](http://community.topcoder.com/stat?c=problem_statement&pm=13776)

给你一棵树，树上不多于50个节点，边有边权，一些节点有特殊标记，现在要将这些标记移动（但不重合），使得由标记点组成的子图联通，求标记移动的距离最大值的最小值

数据很小，考虑题目要求，最后的子图一定是一棵树，既然是树就假设存在树根，然后将节点移动到覆盖这棵树即可。

这是一个网络流问题（匹配/覆盖类问题），枚举树的根，求出所有点到根的路径，标记不能到达（即大于所二分答案的点）的点，则这些点必须要被安排有标记，然后就可以将树上节点和与它距离小于二分的答案的标记节点相连，
最后以此匹配，若所有需要标记的节点都能安排到标记，则此答案可以达到，以此二分即可。

复杂度$$O(n^4 \log (nL))$$

我不会二分（笑）所以写了倍增

AC Code

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#include <iostream>
#include <cstdio>
#include <vector>
#include <queue>
#include <cassert>
#include <cstring>
using namespace std;
struct FoxMeeting
{
#define maxn (50 + 1)
	struct edge{
		int v, n, c;
		edge(){}
		edge(const int &_v, const int &_n, const int &_c):
			v(_v), n(_n), c(_c){}
	}e[maxn * maxn * 10];
	int h[maxn * 3], te;
	int n;
	int d[maxn][maxn];
	int f[maxn];
	int foxes_count;
	int lay[maxn * 3];
	bool need[maxn];
	vector<int> edg[maxn];
#define FOX_ND( _x ) (( _x ) + n)
	void dfstree(int u)
	{
		for (int i = 0; i < edg[u].size(); i++)
			if (edg[u][i] != f[u])
			{
				f[edg[u][i]] = u;
				dfstree(edg[u][i]);
			}
	}
	void addedge(int u, int v, int c)
	{
		e[te] = edge(v, h[u], c);
		h[u] = te++;
		e[te] = edge(u, h[v], 0);
		h[v] = te++;
	}
	bool bfs(int tn)
	{
		memset(lay, -1, sizeof(lay));
		queue<int> q;
		q.push(0);
		lay[0] = 0;
		while (!q.empty())
		{
			int u = q.front();
			q.pop();
			for (int v = h[u]; ~v; v = e[v].n)
			{
				if (lay[e[v].v] == -1 && e[v].c)
				{
					lay[e[v].v] = lay[u] + 1;
					q.push(e[v].v);
				}
			}
		}
		return ~lay[tn];
	}
	int dinic(int u, int f, const int &tn)
	{
		if (u == tn) return f;
		int cnt = 0;
		int tc;
		for (int v = h[u]; (~v) && f; v = e[v].n)
		{
			if (lay[e[v].v] == lay[u] + 1 && e[v].c)
			{
				tc = dinic(e[v].v, min(f, e[v].c), tn);
				f -= tc;
				cnt += tc;
				e[v].c -= tc;
				e[v^1].c += tc;
			}
		}
		return cnt;
	}
	bool build_graph(int root, int td, const vector<int> &foxes)
	{
		int tn = 5 + n + foxes_count;
		int need_flow = 0;
		memset(need, 0, sizeof(need));
		memset(h, -1, sizeof(h));
		te = 0;
		memset(f, 0, sizeof(f));
		dfstree(root);
		for (int i = 0; i < foxes.size(); i++)
		{
			int u = foxes[i];
			int v = u;
			for (; v; v = f[v])
				if (d[u][v] > td)
					need[v] = true;
		}
		for (int i = 1; i <= n ; i++)
			if (need[i])
			{
				addedge(0, i, 1);
				need_flow++;
			}
		for (int i = 0; i < foxes.size() ; i++)
		{
			for (int j = 1; j <= n; j++)
			{
				if (d[j][foxes[i]] <= td)
					addedge(j, FOX_ND(i + 1), 1);
			}
			addedge(FOX_ND(i + 1), tn, 1);
		}
		int ans = 0;
		while (bfs(tn))
		{
			ans += dinic(0, 0x3f3f3f3f, tn);
		}
		return ans == need_flow;
	}
	bool solve(int ansd, const vector<int> &foxes)
	{
		for (int i = 1; i <= n; i++)
			if (build_graph(i, ansd, foxes))
				return true;
		return false;
	}
	int maxDistance(vector <int> A, vector<int> B, vector<int> L, vector<int> foxes)
	{
		memset(d, 0x3f, sizeof(d));
		n = A.size() + 1;
		int tl = 0;
		foxes_count = foxes.size();
		for (int i = 0; i < n - 1; i++)
		{
			int u = A[i], v = B[i], c = L[i];
			tl += c;
			d[u][v] = d[v][u] = c;
			edg[u].push_back(v);
			edg[v].push_back(u);
		}
		for (int i = 1; i <= n; i++)
			d[i][i] = 0;
		for (int k = 1; k <= n; k++)
			for (int i = 1; i <= n; i++)
				for (int j = 1; j <= n; j++)
					d[i][j] = min(d[i][j], d[i][k] + d[k][j]);
		int d = tl;
		for (int i = (1 << 30); i; i >>= 1)
			if (d >= i && solve(d - i, foxes))
				d -= i;
		return d;
	}
};
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~