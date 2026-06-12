{ pkgs ? import <nixpkgs> {} }:
let
  
in 
pkgs.mkShell {
  buildInputs = with pkgs; [
    just
    typescript-language-server
    pnpm
    nodejs_24
  ];
}
