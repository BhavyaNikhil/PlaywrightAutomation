import { qaEnv } from "./qa.env.js";
import { stageEnv } from "./stage.env.js";

const environments = {qa: qaEnv, stage: stageEnv};

export function getEnv() {
    const env = process.env.TEST_ENV || 'qa';
    console.log('Current ENV:', env);          // check what's being read
    console.log('Resolved config:', environments[env]); // check if it resolves
    return environments[env];
}