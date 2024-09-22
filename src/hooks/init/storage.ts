import { Hook } from "@oclif/core";
import Coolify from "../../app/Coolify.js";
import Storage from "../../app/Storage.js";

const hook: Hook<"init"> = async function (opts) {
    await Storage.load();
    return Coolify.load();
};

export default hook;
