# ionic-test1
Testing ionic framework by ego


# Procedure for setting up a ssh key on PC 3 écrans
How to set up ssh authentification on github

https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent


**Open Gitbash as admin (the output file will be generated in /c/Users/Ephraim GOLDSCHMIDT/.ssh/...):

```ssh-keygen -t ed25519 -C "ephraim.goldschmidt@gmail.com"```

Press enter when asked what file to save in

Set an optional paraphrase. I left no passphrase


**Open PowerShell As Administrator (To start the ssh agent)

```Get-Service -Name ssh-agent | Set-Service -StartupType Manual```

then:

```Start-Service ssh-agent```

**Open Terminal as NON administrator (to add the ssh key)

```ssh-add c:/Users/Ephraim/.ssh/id_ed25519```



**Procedure to add the key to GitHub

https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account

In a terminal (copy the public key to the clipboard)

```cd c:/Users/Ephraim/
clip < .ssh/id_ed25519.pub```

in GitHub Settings>Access zone> SSH and GPG keys 
Click New SSH key, set a title, use Authentication key option and paste the public ssh key


** Open GitBash and start cloning using the ssh clone link to folders

```git clone git@github.com:ephie/ionic-test1.git (answer yes to the questions)```


