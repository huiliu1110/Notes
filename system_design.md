步骤1：明确系统所需要满足的用例，范围和约束。

举例说明：
URL shortening service:  
1）服务于几千用户，但是每个用户可能有百万个URL需要被简化。  
2）同时处理百万次的点击，或者几十次点击。  
3）提供数据分析，或者不需要提供。  

Use cases:
1） 用户提交一个URL，系统生成一个简化的URL。
2） 用户修改已经保存的记录。
3） 用户删除已经保存的记录。

4） 生成的url, 系统需要支持redirection。
5） 需要提供数据分析 analytics
6） 自动过期处理

Contraints:
1）amount of traffic: 1000 requests per second 
2）amount of data: 10BN records, 1000 bytes per record.

步骤2: 


Vertical scaling  
1) Adding resources to (or removing resources from) a single node.  
2) The addition of CPUs, memory or storage to a single computer.  
3) More sophisticated programming to allocate tasks among resources and handle issues such as throughput and latency across nodes.   
Horizontal scaling  
1) Adding more nodes to (or removing nodes from) a system.  
2) Adding a new computer to a distributed software application.  
3) Scaling out from one web server to three.  
4) To support tasks required expensive computations, large social networks.  
5) Exploiting this scalability requires software for efficient resource management and maintenance.
Caching
Load balancing
Database replication
Database partitioning

