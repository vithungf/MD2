class IP_regex {

    private IP_regex: RegExp = /[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])/;

    public validate(regex: string): boolean {
        return this.IP_regex.test(regex);
    }
}

