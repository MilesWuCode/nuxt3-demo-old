```sh
docker build --build-arg ENV=local --file ./docker/Dockerfile -t nuxt3-demo .

docker run -p 80:3000 \
--name nuxt3-demo \
--restart unless-stopped \
-d nuxt3-demo:latest
```
