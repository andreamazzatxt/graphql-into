import React from "react";

export interface LoginFormEvent extends React.FormEvent {
    target: React.FormEvent['target'] & {
        githubUser?: { value: string }
    }
}

export interface MetaFix extends ImportMeta {
    env: Record<string, string>
}