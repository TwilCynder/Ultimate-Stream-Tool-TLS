find . -depth -name '*Pac-Man*' \
    -execdir bash -c 'mv -- "$1" "${1//Pac-Man/Pac Man}"' bash {} \;