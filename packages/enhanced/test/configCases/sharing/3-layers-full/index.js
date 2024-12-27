it('should load the component from container', () => {
  return import('./App').then(({ default: App }) => {
    const rendered = App();
    expect(rendered).toBe(
      'App rendered with [This is react 0.1.2], [ComponentA rendered with [This is react 0.1.2]] and [ComponentALayers rendered with [This is layered react]]',
    );
  });
});
