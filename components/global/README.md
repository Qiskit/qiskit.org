# Global components

Any component inside `components/global/` will be available globally (with lazy import) so you can directly use them in your dynamic components.

```bash
| components/
---| global/
------| Foo.vue
------| Bar.vue
```

You can now use `<component>`:

```html
<component :is="'Foo'" />
<component :is="'Bar'" />
```

This feature depends on the [`@nuxt/components` module](https://github.com/nuxt/components#dynamic-components).