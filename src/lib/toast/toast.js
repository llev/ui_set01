import { writable } from 'svelte/store';

// Custom store
const newToast = () => {
	const { subscribe, update } = writable([]);

	function send(message) {
		update((store) => [...store, message]);
	}

    function remove() {
        update((state) => {
            // Change "first" to an underscore to remove the vs code warning
            let [first, ...rest] = state
            return [...rest]
        })
    }

	return { subscribe, send, remove };
};

export const toast = newToast();