FROM ubuntu

ARG DEBIAN_FRONTEND=noninteractive

# https://betas.ankiweb.net/#via-pypipip
RUN \
  apt-get update && \
  apt-get install -y python3-pyqt6.qtquick python3-pyqt6.qtwebengine python3-pyqt6.qtmultimedia qt5-qmake python3-pip python3-venv locales && \
  python3 -m venv --system-site-packages pyenv-anki && \
  pyenv-anki/bin/pip install --upgrade pip && \
  pyenv-anki/bin/pip install --upgrade aqt==24.4.1 && \
  # export PATH="$HOME/.local/bin:$PATH" && \
  apt-get clean

RUN locale-gen en_US.UTF-8
ENV LC_ALL=en_US.UTF-8

# pyenv-anki/bin/anki

# RUN update-locale LANG=en_US.UTF-8
