const { mutate, isError } = useMutation({
        mutationFn: (newProduct) =>
            fetch('http://localhost:3000/posts', {
                method: 'POST',
                body: JSON.stringify(newProduct),
                headers: {
                    'content-type': 'Application/json',
                },
            }),
        onSuccess: async () => {
            return await queryClient.invalidateQueries({ queryKey: ['posts'] });
        },
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const post = {
            id: Date.now(),
            title: e.target.elements.title.value,
        };
        mutate(post);
    };
