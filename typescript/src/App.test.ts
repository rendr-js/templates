import { rendr } from '@rendrjs/core';
import { mount, userEvent, screen } from '@rendrjs/testing-library';
import { expect, test } from 'vitest';
import App from './App.js';

test('counts', async () => {
    const user = userEvent.setup();
    const container = mount(rendr(App));
    const btn = screen.getByText(container, /^count/);
    expect(btn.textContent).toBe('count: 0');
    user.click(btn);
    await screen.waitFor(() => expect(btn.textContent).toBe('count: 1'));
});
