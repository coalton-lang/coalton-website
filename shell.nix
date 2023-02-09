with import <nixpkgs> {};

pkgs.mkShell rec {
  buildInputs = [
    hugo
  ];
}
