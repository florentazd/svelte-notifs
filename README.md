# svelte-notifs

## Description

Utiliser svelte-notfs pour afficher des notifications sur l'interface utilisateur

### Installation

`via NPM`

```bash
npm i svelte-notifs
```

### Module a importer

Le paquet contient les modules suivants:

- `Notifications` Le composant svelte permettant d'afficher les notification
- `notifier` Le module contenant les fonctions de notifications
  - `push(text, options)` pour créer une nouvelle notification
  - `pop()` Pour supprimer toutes les notifications

## Exemple

Creer un fichier .svelte et importer les modules comme suit:

### Main.svelte

```html
<!-- Main.svelte ou +page.svelte -->
<script>
	import { notifier, Notifications } from 'svelte-notifs';

	notifier.push('Hello world');
	// ou
	notifier.push('Hello world', {
		duration: 2000,
		type: 'info'
	});
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
...
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

Pour supprimer toutes les notifications, on utilise la fonction `pop()`
