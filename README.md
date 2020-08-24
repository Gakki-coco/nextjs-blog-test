# 初始代码

## 启动数据库

```
mkdir blog-data
// 启动 docker
docker run -v "$PWD/blog-data":/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_USER=blog -e POSTGRES_HOST_AUTH_METHOD=trust -d postgres:12.2
// 连接 blog
docker exec -it ID bash
psql -U blog
// 创建数据库
CREATE DATABASE blog_development ENCODING 'UTF8' LC_COLLATE 'en_US.utf8' LC_CTYPE 'en_US.utf8';
// 操作数据库
\l
\dt
drop database blog_development;

```

## typeorm

```
// 创建表
yarn typeorm migration:create -n CreatUsers
```

## 开发
```bash
npm run dev
# or
yarn dev
```

## 部署
```bash
yarn build
yarn start
```