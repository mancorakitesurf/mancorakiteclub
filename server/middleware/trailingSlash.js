function trailingSlashRedirect(req, res, next) {
  const [pathname, query = ''] = req.originalUrl.split('?');

  if (pathname.length > 1 && pathname.endsWith('/')) {
    const targetPath = pathname.slice(0, -1);
    const querySuffix = query ? `?${query}` : '';
    return res.redirect(301, `${targetPath}${querySuffix}`);
  }

  return next();
}

module.exports = trailingSlashRedirect;
