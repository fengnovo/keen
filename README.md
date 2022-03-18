###
```  
npm install
npm run start
```

###
要在.env上设置好这些
GITHUB_CLIENT_ID = xxxx
GITHUB_CLIENT_SECRET = xxx
un = fengnovo

```shell
$ curl http://localhost:3000/index?owner=fengnovo
```


### 部署到vercel后，vercel会自动读取.env,自动运行api下面的函数、自动支持ts
GITHUB_CLIENT_ID和GITHUB_CLIENT_SECRET，vercel上是自动有
un这样的自定义的变量要在Setting->Environment Variables上面设置