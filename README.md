# Usage

Installer le paquet

```
npm i -D svelte-notifs
```

Ensuite exporter depuis le paquet, les modules suivants:

- `Notifications` Le composant svelte permettant d'afficher les notification
- `notifier` Pour créer une notification

## Exemple

Creer un fichier .svelte et importer les modules comme suit:

### Main.svelte

```html
<script>
	import { notifier, Notifications } from 'svelte-notifs';

	notifier.push('Hello world');
	// ou
	notifier.push('Hello world', {
		duration: 2000,
		type: 'success'
	});
	// ou
	notifier.push('Hello world', {
		duration: 1000,
		type: 'warning'
	});
	// ou
	notifier.push('Hello world', {
		duration: 2000,
		type: 'danger'
	});
</script>

<Notifications />
```

Vous pouvez aussi ajouter du html

```html
<script>
	notifier.push('Cliquer <b><a href="https://google.com">ici</a></b> pour aller sur google', {
		duration: 2000,
		type: 'danger'
	});
</script>
```
