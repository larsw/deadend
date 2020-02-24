# deadend - dead simple wildcard 404 site.

## Background

So, you need a wildcard site to show to your users when 
they navigate to a non-existing site. This typically happens
if they fall through all the rules in your load balancer - intentionally or
not.

## Usage

If you use Træfik as your load balancer/reverse proxy, you can create a
rule with higher (actually lower) priority, that will be matched last, if
no other rules apply:

Example with labels in a `docker-compose.yml` file:

```
TODO
```

## License

MIT License.
