const remove = (s, n) => s.replace(/!/g, match => (n-- > 0 ? '' : match))
