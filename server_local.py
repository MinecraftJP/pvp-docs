#!/usr/bin/env python

from livereload import Server, shell

server = Server()
server.watch('docs/**/*.rst', shell('gmake html', cwd='docs'))
server.serve(open_url=False, host='127.0.0.1', root='docs/_build/html')

