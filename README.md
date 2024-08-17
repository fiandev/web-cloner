# web cloner

a tool to copy websites using wget

## installation

first, install wget into your device

```sh
# linux ubuntu, debian, others
apt-get install wget -y

# linux arch, blackarch
pacman -S wget --noconfirm

# termux
pkg install wget -y

# window
winget install -e --id JernejSimoncic.Wget
```

second, clone this repository into you device

```sh
git clone https://github.com/fiandev/web-cloner

# enter folder
cd web-cloner
```

## how to usage

```sh
./clone <url>

# example
./clone https://example.com

```

> built by fiandev
