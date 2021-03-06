---
layout: post
title: 算法竞赛，从入门到退役
tags: [ICPC]
category: AfterOI
---

**算法竞赛的前奏**

还记得第一次接触编程是在小学四年级的时候（写完这句话突然发现，接触编程已经十年了），那时候偶然见到一本讲Flash的书（当年Flash还不是Adobe家的，现在Flash已经成为时代的眼泪了），从那里开始接触到Flash的编程，ActionScript2，但是并没有怎么深入，因为没多久就接触到一门更方便入门的语言，叫Visual Basic。

VisualBasic虽说有个Basic的名，但是现在想来，和Basic并没有多大联系，或者是说可能经过好几个大版本的迭代，已经没有当年Basic的影子了。不过从初学者的角度而言，VB还是挺好用的，当然主要原因就是VB可以拖控件，这就使得一行代码不写，就可以“写”出一个可以过编译但是除了过编译就没有任何用的程序。不过正是因为VB不写代码就能写（带窗口的）程序的特性，给刚接触编程的我一个正反馈，也使得我在编程的路上越陷越深。后来家里人看着我这样，感觉光写程序太没意思了，就随便报了一个NCRE（就是等级考试啦，好像这么多年还是80块？），一级的MSOffice随便就过了，到二级的时候因为各种概念记不清楚，笔试就挂了一次。后来也过了。到小学六年级的时候，想尝试一下三级，三级的时候就不能用VB了，取而代之的是有用VC的网络的科目来选。

VC，虽然现在被骂得不成样子，但是确实是一个事实标准，相比于VB，C语言一下子就复杂了许多，首先VB是一个（伪）面向对象语言，而C就只有面向过程部分，更不用说指针把人指的眼花缭乱。但似乎除此之外，也没有太多的不同点。VB有函数，VC也有，VB有循环，VC也有，VB用EndIf、Next，VC用的大括号，这样想来，其实所有的编程语言（应该是大部分）都一个样，换个关键词，换个结构，就能编程另外一门语言。

到了初中之后，压力一下子大了起来，早上六点起床成了常态，虽然我的成绩稍好一些，大部分的作业都能在学校完成，在家里并不需要多少时间应付作业上的事情。但也不可能有大块时间去写代码。初一的时候，在网上搜到了一篇新闻，讲的是参加算法竞赛有机会保送到武汉市的重点王牌中学（原文如此）便想去尝试一下。打电话联系到了一位老师试着听了一下他的课，虽然只听了一次就因为没有时间而放弃了，但也摸到了算法竞赛的门把手。在那年的秋天参加了当年的NOIP（全国信息学奥赛省赛）的初赛之后，就在复赛（普及组）漂亮地得到了0分。此后两年，没有任何和算法竞赛的接触，甚至剪掉了家里电脑的电源线（只是一根备用线，用来忽悠初中班主任）。

**真正的入门**

再一次接触算法竞赛，是在初中升高中的暑假，早早知道自己的成绩之后，在开学之前的暑假到了高中参加暑假集训。因为Pascal正在算法竞赛届流行（差不多就是在那一年之后，没有更多的人用Pascal写算法竞赛题目，都转而使用C++，其原因是CCF方面放开了C++语言使用标准库的限制）就花了几天从C转到Pascal，又在比赛前夕转用C++编程，正如我之前所说，这些语言都是相似的，无非就是些关键字的差别，声明调用的差别，所以这次转语言异常顺利。高中开学之后，被（qin）分（ding）到了竞赛班，全班只有我和另外一名同学参加信息学竞赛。一眼望去，全是数学和物理竞赛的。加上入学摸底考试又处于全班垫底，使得我高中三年都不敢看成绩单（事实上，这一垫底就垫了三年，所以我不用看也能知道自己的排名）。

那年的NOIP成绩并不理想，只有省二等奖，在湖北省这个弱省的环境下可以说很差了。而到了高一下学期，也就是2013年，开始了停课生涯，也就正式开始为算法竞赛而准备。也接触了Online Judge这个好东西，没日没夜的在机房刷题，虽然现在看来，做那些题目跟划水没有区别，但是仔细去想的话，也在一定程度上提高了写代码的熟练程度。高一的那年暑假，到湖南去参加湖南省队组织的集训，第一次见到真正的算法竞赛的大神，也第一次见识到真正的算法竞赛题目。在划了一年水之后，我开始接触有难度的题目，决定以省选为目标。也接触到“大视野在线评测”这个OJ。高二新学期开学之后，写的代码从“计算书号”，变成了“给你一个长度十万的数列，1秒内做十万次区间/减/乘/除/极大/极小/和/中位数/平均数”等等等等。

**疯狂的2014年**

跨入2014年，我的目标从“拿省一”变成了“用上Ubuntu 14.04 LTS”，因为这个版本在省选之后发布，如果没有入选省队，也就意味着就此退役，回归普通高中生的生活。为此我拼命地刷题，在做题最多的一天，我从早上7点半一直做到了晚上十点，完成了7道题。而在半年多的时间当中，我做了300题有余。也是在那个时候，我接触到了在线比赛，即一个名为Codeforces的网站，时不时地打一场比赛，学一下新姿势，成为了生活的常态。想到今年听到广东工业大学的教练说他们的同学是“冬练三九，夏练三伏”，也是深有同感。当然也参加了当年的武大校赛，虽然只过了一题就GG了。

![2014](/Users/ejq/2014.png)

![2014.cf](/Users/ejq/Library/Mobile Documents/com~apple~Grab/Documents/2014.cf.png)

2014年，我开始用Github管理我的代码，也看到了当年为了从全国千余人中出头的渴望。在上面这张图里，也可以看到在六月，也就是大赛前的一个月，Github上的格子格外密集一些。当然，最终一切都停在了2014年的7月底，大赛结束之后，因为自己的能力实在不足，我退役了，退役之后文化课成绩不到500分，为了弥补一年多的损失，只有把当年打比赛的精力全部用来准备高考。高考最后结果怎么样嘛，当然是裸分考不上武大啦。

**再战算法竞赛**

高考结束之后，我在湖北NOI学生交流群里看到了这样一句话：“武汉大学ACM集训队暑假集训将于2015年7月19日开始，地点在计算机学院B304”，本来这个消息是说给当年NOI上面签约的另外三名同学的，然后我见到之后当即决定：

> 不打这比赛我还是人？

（当然，我在高考结束之后的第一天，就已经决定要在大学参加ACM系列比赛，此处仅供调侃）

于是在2015年的夏天，我的Github上又多处了一抹原谅的绿色。

> 看那夕阳下的绿色，是我逝去的青春啊。

在那暑假集训之后，我们队就以还行的成绩去参加了当年的ACM/ICPC区域赛合肥赛区，深秋的合肥不得不说还是挺冷的。在合肥，我还见到了当年的高中学长和当年湖北省队的第一名@vfleaking，虽然合肥的成绩并不理想，90个参赛队中，只拿到了一个还行的成绩。有趣的是，在比赛的直播中，似乎有一名主播说了这样一句话：

> 这个（叫傅立叶变换的队）昨天没有做出C怎么今天在看A啊
>
> （那两场比赛中C题和A题都是傅立叶变换的题目）

那年的12月，我们又参加了在上海举办的EC-Final（再一次享受到了公费旅游的乐趣），然后"顺利"得到了铜牌第一名的成绩（就是上面那张图）。

转眼间到了2016年，课程压力又又又又变大了。但是即使这样，该要继续的东西还是要继续，B304机房里面的同学，大三大四的开始退役，为找工作，实习，读研奔波。只是偶尔能在机房看到他们打三国杀 / 狼人。到了2016年的春天，我们又开始为新一年的比赛做准备。当然，2016年因为划水太多，很多训练都没有用心去做，事后也没有认真去想，2016年的成绩也并不理想，只得到了两个铜。

（别看数量，看密度）

**只为金牌的2017年**

2016年的比赛之后，又有一波同学退役了，当然也有陆敬浩他们队进了决赛。这个时候，上海交大以前的金牌选手@ftiasch（圈内叫叉姐）发出了一个名为ICPC-Camp的训练营的邀请，之前组过FFT队的队友@Sagitta拉着我想去参加。

> 当然要去啦，不去我还是人？（诶这话我是不是说过？）

在集训队里面问了一下之后，我们集训队最终凑出了三支队（~~BiBi，Printemps和Lily white~~）（没睡醒、丝滑拿铁、两学一做）一共九个人，跑去被虐。也是在两次参加湖南省队集训之后的第三次感受到了真正的难题的样子。不过题目难是一方面，做起来的确舒服。而差不多是每年的既定程序，在武汉打了一圈校赛之后，又到湖南和陕西参加了两场省赛，都是二十余名的样子，好在都拿到了金牌。

又到了暑假集训，和之前两年的暑假集训所不同的地方在于，这一年的暑假集训，是由我来组织。因为暑假集训关系到当年的参赛队伍，也是在比赛之前最后一次大规模训练，所以从题目的挑选到规划，都必须按照当年的区域赛的模式来进行。为此没有少操心。在暑假集训期间，机房的空调效果也不好，问了楼下的物业怎么检查却发现不了问题，最后得到的答复竟然是“关掉放五分钟再开”就好了（事实上真的是这样！）还有训练期间遇到的学院大楼停电，就有了30人大战女仆咖啡厅的故事。

> 三十人大战女仆咖啡厅的场面

在暑假集训的最后几天，因为又有一些人怀疑排名的公平性，所以又换题，模拟正式比赛流程，自己出钱去打印题面。但最后还是得到了一个让大部分人都信服的排名，按照这个排名又去安排了这一年的区域赛参赛分配。而我所在的队就最终定在了ICPC的沈阳、南宁、外加一个CCPC的杭州赛区。而比赛结果方面，沈阳赛区当中，银牌第四，杭州倒是拿了金牌，但到了南宁，又和题目八字不合（其实就是菜）只拿到了铜牌。在比完南宁之后，我倒是觉得，差不多就这样了，没有金牌也就认了，还是自己的能力不够。抱着这样想法的我，对于EC的准备也是随便应付一下，又把精力投入到了课程的学习当中。

但可能也正是因为对EC的准备是如此的放松，如此的不抱希望，在比赛的时候心态也是如此的好。像以往的时候，我在比赛时常说的一句是“靠题数，罚时算了”，但是EC的时候我却对着一道一百多个队通过的题说出了“我再改改，不行这题就算了”的话。到了最后一个小时，想法也从“我们抓紧时间，一起想一题”，变成了悄悄再开一题玩玩，反正拿不了金。

可哪想着就这样拿金了呢？所以说，一个人的命运啊，既要考虑历史的进程，个人的心态也是很重要的啊。

**无病呻吟的感悟**

比完今年的最后一场比赛，想着算法竞赛的生涯就到此结束，要和五年来不变的目标说再见了，感觉还是少了点什么。不过看着OJ上不再提交的一个个账号，他们的个人签名变成了“OI再见”或者“ACM再见”之类的话，想来算法竞赛对于我们而言早已是生活的一部分，又怎么可能那么简单说再见呢？打算法竞赛的时候，我曾经为了一道题目，代码能够块10毫秒，少用几兆内存而改上数个小时，能够因为一道题没有通过就寝食难安，也曾为做出一道鲜有人做出的题惊喜，也有在比赛中登顶的喜悦。

这些东西，早已成为了肌肉记忆，哪怕不再打比赛，不用再纠结那一点点的优化，也会去不自觉的去修改代码——这里还能把常数改小一点，那里换个顺序还能让浮点数的精度高一点——而正是这些，在算法竞赛中积累的经验，以及精益求精的思想和严谨的思维，是其它任何东西都带来不了的。
