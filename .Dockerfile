FROM registry.cn-zhangjiakou.aliyuncs.com/eic/common:nginx-web

COPY ./packages/demo/demo-v2/dist/ /usr/share/nginx/html/
COPY ./packages/demo/demo-v3/dist/ /usr/share/nginx/html/
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]