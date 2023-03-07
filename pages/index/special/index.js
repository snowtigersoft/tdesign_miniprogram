Component({
  options: {
    styleIsolation: 'apply-shared',
  },
  data: {
    value: 0,
  },
  methods: {
    onChange(e) {
      this.setData({ value: e.detail.value });
    }
  },
});
