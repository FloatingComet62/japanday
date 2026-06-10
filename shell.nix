{ pkgs ? import <nixpkgs> {} }:
let
  
in 
pkgs.mkShell {
  buildInputs = with pkgs; [
    just
    bun
    typescript-language-server
  ];
}
