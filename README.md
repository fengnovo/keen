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

### OAuth2.0
这部分参照 https://github.com/ruanyf/node-oauth-demo  
localhost:3000 要改成自己的vercel域名

#### oauth流程
1. 点登陆拉起github授权
    https://github.com/login/oauth/authorize?client_id=xxx&redirect_uri=http://localhost:3000/oauth/redirect  
2. github授权完回调注册的回调地址，并把code拼到回调地址上
    http://localhost:3000/oauth/redirect?code=xxx  
3. 服务器收到code，发起post请求 
    'https://github.com/login/oauth/access_token?' +  
      `client_id=${clientID}&` +  
      `client_secret=${clientSecret}&` +  
      `code=${code}`,  
    得到 token  
4. 之后就可以拿token请求github的api  
     https://api.github.com/user 
     headers: {
        Authorization: `token ${token}`
     }
    

