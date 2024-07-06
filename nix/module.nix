{ config, lib, pkgs, ... }:

let cfg = config.services.limbo;
in {
  options.services.limbo = (import ./options.nix { inherit lib pkgs; });

  config =
    let finalPackage = cfg.package.override { defaultConfig = cfg.settings; };
    in lib.mkIf cfg.enable {
      environment.systemPackages = [ cfg.package ];

      systemd.user.services.limbo = {
        description = "limbo service";
        path = [ cfg.package ];
        after = [ "graphical-session-pre.target" ];
        partOf = [ "graphical-session.target" ];
        wantedBy = [ "graphical-session.target" ];
        serviceConfig = {
          ExecStart = "${finalPackage}/bin/limbo";
          Restart = "always";
        };
      };
    };
}